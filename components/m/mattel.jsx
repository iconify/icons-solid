import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnayzyuky.css';
import '../../css/b/basqtwj7r.css';
import '../../css/p/po2o9fxuh.css';
import '../../css/r/rat1pebnb.css';
import '../../css/k/kjur5hb-c.css';

const viewBox = {"width":899.99,"height":898.06};
const content = `<path class="wnayzyuky"/><path class="basqtwj7r"/><path class="po2o9fxuh"/><path class="rat1pebnb"/><path class="kjur5hb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mattel"} {...others} />);
}

export default Component;
