import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amp6lobmd.css';
import '../../css/t/tcgbwhb4q.css';
import '../../css/m/m-_pn25zh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="amp6lobmd"/><path class="tcgbwhb4q"/><path class="m-_pn25zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lasso-20"} {...others} />);
}

export default Component;
