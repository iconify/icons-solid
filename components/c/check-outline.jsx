import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yes38jbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="check-outline"><path class="Vector yes38jbxi" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:check-outline"} {...others} />);
}

export default Component;
