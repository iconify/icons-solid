import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a78anzptu.css';
import '../../css/c/ci8qm3bnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a78anzptu"/><path clip-rule="evenodd" class="ci8qm3bnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:history-outline"} {...others} />);
}

export default Component;
