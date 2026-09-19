import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2abs1bhy.css';
import '../../css/v/v23tyc59y.css';
import '../../css/f/fhiircb7l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t2abs1bhy"/><circle class="v23tyc59y"/><path class="fhiircb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:user-identification"} {...others} />);
}

export default Component;
