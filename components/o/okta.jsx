import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqm9wbc2m.css';

const viewBox = {"width":33,"height":33};
const content = `<path clip-rule="evenodd" class="oqm9wbc2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:okta"} {...others} />);
}

export default Component;
