import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me5ba80yv.css';
import '../../css/c/c0ypj1gea.css';
import '../../css/b/bsi8mlbws.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="me5ba80yv"><path class="c0ypj1gea"/><path class="bsi8mlbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:check-thick"} {...others} />);
}

export default Component;
