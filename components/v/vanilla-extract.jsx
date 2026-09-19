import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoeyw0blc.css';
import '../../css/h/hg2rozmww.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eoeyw0blc"/><path class="hg2rozmww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:vanilla-extract"} {...others} />);
}

export default Component;
