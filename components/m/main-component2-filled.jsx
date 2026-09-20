import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3hxf6ffp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3hxf6ffp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:main-component2-filled"} {...others} />);
}

export default Component;
