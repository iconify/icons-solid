import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/w/wtbqjwbif.css';
import '../../css/c/c4bl7z6jp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="wtbqjwbif"/><path class="c4bl7z6jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vest"} {...others} />);
}

export default Component;
