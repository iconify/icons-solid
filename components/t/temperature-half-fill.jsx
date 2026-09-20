import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay8cjh3ds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay8cjh3ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:temperature-half-fill"} {...others} />);
}

export default Component;
