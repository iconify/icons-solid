import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5ej4pbho.css';
import '../../css/c/c6etmkbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d5ej4pbho"/><path class="c6etmkbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:face-mask-filled"} {...others} />);
}

export default Component;
