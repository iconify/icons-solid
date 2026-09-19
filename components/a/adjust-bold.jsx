import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da1skdh9u.css';
import '../../css/l/l958i55ae.css';
import '../../css/c/cyk_bcwer.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="da1skdh9u"/><path class="l958i55ae"/><path class="cyk_bcwer"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:adjust-bold"} {...others} />);
}

export default Component;
