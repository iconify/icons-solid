import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyq4nf5rx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zyq4nf5rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:libreoffice-math"} {...others} />);
}

export default Component;
