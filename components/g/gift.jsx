import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o4jcstbtn.css';
import '../../css/a/ab-n9ub9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="o4jcstbtn"/><path class="ab-n9ub9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:gift"} {...others} />);
}

export default Component;
