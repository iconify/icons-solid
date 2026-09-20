import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7idm8bkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z7idm8bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:forbidden-circle-outline"} {...others} />);
}

export default Component;
