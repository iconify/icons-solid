import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/w006b1bic.css';
import '../../css/u/u-r8ydben.css';
import '../../css/o/o-4xw7lai.css';
import '../../css/v/vtw6jyqmn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="w006b1bic"/><path class="u-r8ydben"/><path class="o-4xw7lai"/><path class="vtw6jyqmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:install"} {...others} />);
}

export default Component;
