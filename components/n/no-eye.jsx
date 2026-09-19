import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuznmyb7t.css';

const viewBox = {"width":528,"height":480};
const content = `<path class="uuznmyb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:no-eye"} {...others} />);
}

export default Component;
