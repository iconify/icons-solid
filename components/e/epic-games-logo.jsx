import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/ppv90kgvs.css';
import '../../css/o/oni7jve8a.css';
import '../../css/e/ebnox-sdk.css';
import '../../css/c/cahtx5bpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ppv90kgvs"/><path class="oni7jve8a"/><path class="ebnox-sdk"/><path class="cahtx5bpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:epic-games-logo"} {...others} />);
}

export default Component;
