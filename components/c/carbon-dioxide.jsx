import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gna6b-1ep.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gna6b-1ep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:carbon-dioxide"} {...others} />);
}

export default Component;
