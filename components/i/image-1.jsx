import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-7xgub2u.css';
import '../../css/b/b88eryboh.css';
import '../../css/h/hbk7qgykw.css';
import '../../css/w/wjdt7iolf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b-7xgub2u"/><circle class="b88eryboh"/><path class="hbk7qgykw"/><circle class="wjdt7iolf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:image-1"} {...others} />);
}

export default Component;
