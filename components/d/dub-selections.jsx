import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4xodpb5a.css';
import '../../css/u/uysq62-mn.css';
import '../../css/t/tcbtqgb3r.css';
import '../../css/m/m-24ijb3r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h4xodpb5a"><path class="uysq62-mn"/><ellipse class="tcbtqgb3r"/><path class="m-24ijb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:dub-selections"} {...others} />);
}

export default Component;
