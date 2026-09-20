import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.aa8jkq4me {
  fill-rule: evenodd;
  d: path("M7 9.5a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2.805 1.406q-.37.09-1.221.372l-.061-.085c1.258-.378 2.272-.955 3.032-1.734q1.025-1.047 1.382-2.25q.224.19.407.419c.124.835.03 1.457-.258 1.884c-.356.526-.95.855-1.505 1c-.072.019-.202.048-.403.092l-.398.085l-.213.045l-.113.024c-.274.06-.483.107-.65.148");
}

.cuyn6tgcc {
  fill: currentColor;
}

.m-pl6htxv {
  fill-rule: evenodd;
  d: path("M12.5 2h-5Q5 3 4.5 5v10a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V5q-.5-2-3-3m-6 13V5.294c.19-.502.624-.926 1.411-1.294h4.178c.787.368 1.221.792 1.411 1.294V15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="m-pl6htxv"/><path clip-rule="evenodd" class="aa8jkq4me"/><path class="xedf9ccsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:can-off"} {...others} />);
}

export default Component;
