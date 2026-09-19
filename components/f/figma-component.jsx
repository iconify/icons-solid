import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/v/v7raflbyf.css';
import '../../css/o/oh6b3w1gt.css';
import '../../css/q/qtjo6dbkq.css';
import '../../css/z/zsxs2mbbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="v7raflbyf"/><path class="oh6b3w1gt"/><path class="qtjo6dbkq"/><path class="zsxs2mbbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:figma-component"} {...others} />);
}

export default Component;
