import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjcqm-b-m.css';
import '../../css/z/z6o9u6zlw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="qjcqm-b-m"/><path class="z6o9u6zlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:copy"} {...others} />);
}

export default Component;
