import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/ewu40p8ah.css';
import '../../css/r/rbk42vbjf.css';
import '../../css/p/p72gbhb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ewu40p8ah"/><path class="rbk42vbjf"/><path class="p72gbhb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gamercastering-logo"} {...others} />);
}

export default Component;
