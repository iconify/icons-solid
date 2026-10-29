import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytn_mr8so.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k6hsouu4e.css';
import '../../css/e/epawqlb9m.css';
import '../../css/p/pbszodb7t.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lr7aqh_8o.css';
import '../../css/t/trwfw0k-p.css';
import '../../css/o/oxdchzbuj.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGTPB48bvU" class="ytn_mr8so"/></defs><g class="t_2lkqbxb"><path class="k6hsouu4e wm-shadow"/><path class="epawqlb9m"/><path class="pbszodb7t"/><use href="#SVGTPB48bvU" class="d2kvgvbvc"/><path class="lr7aqh_8o"/><use href="#SVGTPB48bvU" class="d2kvgvbvc"/><path class="trwfw0k-p"/><path class="oxdchzbuj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:person-standing"} {...others} />);
}

export default Component;
