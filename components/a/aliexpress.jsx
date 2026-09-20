import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzr2lqb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzr2lqb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:aliexpress"} {...others} />);
}

export default Component;
