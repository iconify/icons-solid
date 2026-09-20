import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzu0hx63v.css';
import '../../css/o/oo9xgfbil.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGgmnKNc0g" class="bzu0hx63v"/></defs><use href="#SVGgmnKNc0g"/><use href="#SVGgmnKNc0g"/><path class="oo9xgfbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:supabase"} {...others} />);
}

export default Component;
