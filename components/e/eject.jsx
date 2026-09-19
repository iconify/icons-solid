import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq4qg5b-r.css';

const viewBox = {"width":1568,"height":1312};
const content = `<path class="bq4qg5b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:eject"} {...others} />);
}

export default Component;
