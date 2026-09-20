import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bkaz-jg1d.css';
import '../../css/n/ndl6-1bci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bkaz-jg1d"/><path class="ndl6-1bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-airpods-case"} {...others} />);
}

export default Component;
