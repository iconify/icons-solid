import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fru1dogiw.css';
import '../../css/l/ltqrw6w2o.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fru1dogiw"/><path class="ltqrw6w2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sitar-16"} {...others} />);
}

export default Component;
