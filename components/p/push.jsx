import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjbue95vu.css';
import '../../css/z/zpecffw0q.css';
import '../../css/w/w8qc-tbhs.css';
import '../../css/s/si0qb1owb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjbue95vu"/><path class="zpecffw0q"/><path class="w8qc-tbhs"/><path class="si0qb1owb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:push"} {...others} />);
}

export default Component;
