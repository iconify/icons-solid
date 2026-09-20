import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur8ru8b9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ur8ru8b9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:apache-nifi"} {...others} />);
}

export default Component;
