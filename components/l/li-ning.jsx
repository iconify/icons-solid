import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyfuaq7jw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kyfuaq7jw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:li-ning"} {...others} />);
}

export default Component;
