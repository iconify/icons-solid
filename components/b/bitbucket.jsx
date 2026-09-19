import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of9xrlbih.css';

const viewBox = {"width":1440,"height":1664};
const content = `<path class="of9xrlbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:bitbucket"} {...others} />);
}

export default Component;
