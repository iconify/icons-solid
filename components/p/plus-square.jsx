import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/x/x8s03n.css';
import '../../css/u/ujphdc.css';
import '../../css/e/eaj3ug.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c x8s03n"/><path class="a0m25c ujphdc"/><path class="a0m25c eaj3ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:plus-square"} {...others} />);
}

export default Component;
