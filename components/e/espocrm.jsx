import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihcuxaciq.css';
import '../../css/h/ho7n6nb4g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ihcuxaciq"/><path class="ho7n6nb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:espocrm"} {...others} />);
}

export default Component;
