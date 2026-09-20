import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/n/ngf5ytuky.css';
import '../../css/d/d42z9i18m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ngf5ytuky"/><path class="d42z9i18m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:pixabay-logo"} {...others} />);
}

export default Component;
