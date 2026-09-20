import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3124ccsd.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="a3124ccsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:play"} {...others} />);
}

export default Component;
