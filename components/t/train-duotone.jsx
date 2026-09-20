import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o30i8gi7t.css';
import '../../css/o/orm3uibci.css';
import '../../css/j/j3akw_70p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o30i8gi7t"/><path class="orm3uibci"/><path class="j3akw_70p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:train-duotone"} {...others} />);
}

export default Component;
