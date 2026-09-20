import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/op38a-bzj.css';
import '../../css/a/a0rs9ta5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="op38a-bzj"/><rect class="a0rs9ta5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:devices"} {...others} />);
}

export default Component;
