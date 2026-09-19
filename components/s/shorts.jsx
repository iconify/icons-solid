import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_cnzsbat.css';
import '../../css/g/gtds0ibbz.css';
import '../../css/q/q46dpkbew.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeD7fgFUS"><g class="ft5dv1b6b"><path class="d_cnzsbat"/><path class="gtds0ibbz"/><path class="q46dpkbew"/></g></mask></defs><path mask="url(#SVGeD7fgFUS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shorts"} {...others} />);
}

export default Component;
