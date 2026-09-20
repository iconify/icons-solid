import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6fg1dn4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z6fg1dn4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:redux-saga"} {...others} />);
}

export default Component;
