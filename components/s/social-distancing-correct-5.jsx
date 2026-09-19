import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr6lt4bch.css';
import '../../css/l/lzmkr4bin.css';
import '../../css/y/y9w961b7d.css';
import '../../css/a/a36zse7hg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xr6lt4bch"/><path class="lzmkr4bin"/><path class="y9w961b7d"/><path class="a36zse7hg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-correct-5"} {...others} />);
}

export default Component;
