import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a49jj4rut.css';
import '../../css/k/k31-awblm.css';
import '../../css/h/h4e_rab9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a49jj4rut"/><path class="k31-awblm"/><rect class="h4e_rab9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:three-squares-bold-duotone"} {...others} />);
}

export default Component;
