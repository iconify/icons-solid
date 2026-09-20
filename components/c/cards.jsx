import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1xg7eiii.css';
import '../../css/g/gzw7gyr6o.css';
import '../../css/s/s1z0bh-al.css';
import '../../css/n/nqy-9n9qs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g1xg7eiii"/><path class="gzw7gyr6o"/><path class="s1z0bh-al"/><path class="nqy-9n9qs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cards"} {...others} />);
}

export default Component;
