import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj67-cbkl.css';
import '../../css/g/gpayj6yuu.css';
import '../../css/o/odhhf9bve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj67-cbkl"/><path class="gpayj6yuu"/><path class="odhhf9bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:reddit"} {...others} />);
}

export default Component;
