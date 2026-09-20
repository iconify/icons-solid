import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/n/nk498jbjw.css';
import '../../css/d/dps7beoqy.css';
import '../../css/u/u7ofx7jsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="nk498jbjw"/><path class="dps7beoqy"/><path class="u7ofx7jsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:apache-netbeans-logo"} {...others} />);
}

export default Component;
