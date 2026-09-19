import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/u/uzfquqw0e.css';
import '../../css/n/nzzcombqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFjqP2c8q"><g class="aql7dnt-u"><path class="m3rbq0wjz"/><path class="uzfquqw0e"/><path class="nzzcombqn"/></g></mask></defs><path mask="url(#SVGFjqP2c8q)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-focus-one"} {...others} />);
}

export default Component;
