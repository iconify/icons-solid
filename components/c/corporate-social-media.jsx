import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/snbwucclc.css';
import '../../css/n/ndwdbjb7j.css';
import '../../css/b/bza-6eb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="snbwucclc"/><path class="ndwdbjb7j"/><path class="bza-6eb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:corporate-social-media"} {...others} />);
}

export default Component;
