import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v49pi3bmt.css';
import '../../css/q/qoebk6oie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v49pi3bmt"/><path class="qoebk6oie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sun-medium-fill"} {...others} />);
}

export default Component;
