import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h8vg5hbbc.css';
import '../../css/c/ceitnjb9j.css';
import '../../css/b/bk5i81qzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h8vg5hbbc"/><circle class="ceitnjb9j"/><circle class="bk5i81qzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:settings-2"} {...others} />);
}

export default Component;
