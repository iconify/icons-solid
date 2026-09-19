import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/utlov4bwm.css';
import '../../css/v/ve9761bes.css';
import '../../css/d/dhgjsb-5c.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="a0a9vkbzg"><path class="utlov4bwm"/><path class="ve9761bes"/><path class="dhgjsb-5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:storage-card-one"} {...others} />);
}

export default Component;
