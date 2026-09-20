import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbocu9bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bbocu9bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sort-down-up"} {...others} />);
}

export default Component;
